# backend/setup.py

from setuptools import setup, find_packages

setup(
    name='EpiRecipes-Search-Platform',
    version='0.1',
    description='A full-stack web application for searching recipes using OpenSearch.',
    author='Your Name',
    author_email='your.email@example.com',
    url='https://github.com/yourusername/EpiRecipes-Search-Platform',  # Replace with your repo URL
    packages=find_packages(include=['app', 'app.*']),
    install_requires=[
        'Flask>=2.0',
        'Flask-Cors>=3.0',
        'requests>=2.25',
    ],
    entry_points={
        'console_scripts': [
            'run=app.main:app.run'  # Allows running the app with `run`
        ]
    },
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.7',
)
