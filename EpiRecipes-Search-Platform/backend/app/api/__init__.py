# backend/app/api/__init__.py

from flask import Blueprint

# Create a blueprint for the recipes API
recipes_bp = Blueprint('recipes', __name__)

from . import recipes  # Import the recipes module to register routes
