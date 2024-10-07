# backend/app/api/recipes.py

from flask import jsonify, request
from . import recipes_bp
import requests
import os

# Fetch the OpenSearch URL from the environment or config
OPENSEARCH_URL = os.environ.get('OPENSEARCH_URL', 'http://localhost:9200')

@recipes_bp.route('/search', methods=['GET'])
def search_recipes():
    query = request.args.get('q', '')
    
    if not query:
        return jsonify({"error": "Missing query parameter."}), 400

    # Construct the OpenSearch query
    search_query = {
        "query": {
            "multi_match": {
                "query": query,
                "fields": ["title", "ingredients", "cuisine"]
            }
        }
    }

    # Perform the search on OpenSearch
    response = requests.get(f'{OPENSEARCH_URL}/epirecipes/_search', json=search_query)

    if response.status_code != 200:
        return jsonify({"error": "Error querying OpenSearch."}), 500

    # Parse the OpenSearch response
    results = response.json()
    recipes = [{"title": hit["_source"]["title"], 
                "ingredients": hit["_source"]["ingredients"],
                "cuisine": hit["_source"]["cuisine"]} for hit in results['hits']['hits']]

    return jsonify(recipes)
