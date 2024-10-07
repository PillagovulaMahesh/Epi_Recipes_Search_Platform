# backend/app/services/opensearch.py

import requests
import os

class OpenSearchService:
    def __init__(self):
        self.base_url = os.environ.get('OPENSEARCH_URL', 'http://localhost:9200')
        self.index_name = 'epirecipes'

    def search_recipes(self, query):
        """Search for recipes in the OpenSearch index."""
        search_query = {
            "query": {
                "multi_match": {
                    "query": query,
                    "fields": ["title", "ingredients", "cuisine"]
                }
            }
        }

        try:
            response = requests.get(f'{self.base_url}/{self.index_name}/_search', json=search_query)

            if response.status_code == 200:
                return response.json()['hits']['hits']
            else:
                raise Exception(f"Error querying OpenSearch: {response.text}")
        except Exception as e:
            print(f"An error occurred: {e}")
            return None
