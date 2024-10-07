# backend/app/config.py

import os

class Config:
    """Base configuration."""
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your_default_secret_key')  # Change to a secure key
    OPENSEARCH_URL = os.environ.get('OPENSEARCH_URL', 'http://localhost:9200')  # OpenSearch URL
    DEBUG = os.environ.get('DEBUG', 'True') == 'True'  # Set debug mode

# You can extend this class for different environments (e.g., Development, Production)
class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False

# Use this to load the appropriate config
def get_config():
    env = os.environ.get('FLASK_ENV', 'development')
    if env == 'production':
        return ProductionConfig
    return DevelopmentConfig
