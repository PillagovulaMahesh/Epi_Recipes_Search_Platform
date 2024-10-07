# backend/app/__init__.py

from flask import Flask
from flask_cors import CORS
from .api.recipes import recipes_bp  # Import the recipes blueprint

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes

    # Configure the app (if needed)
    app.config.from_mapping(
        SECRET_KEY='your_secret_key',  # Change to a secure key
        OPENSEARCH_URL='http://localhost:9200'  # OpenSearch URL
    )

    # Register blueprints
    app.register_blueprint(recipes_bp)

    return app
