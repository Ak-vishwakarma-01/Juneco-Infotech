#!/bin/bash

# Check if a project name is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <project_name>"
    exit 1
fi

PROJECT_NAME=$1

# Create and activate a Python virtual environment
mkdir $PROJECT_NAME
cd $PROJECT_NAME
python -m venv venv
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    source venv/Scripts/activate
else
    source venv/bin/activate
fi
echo "Virtual environment activated."

# Install Django
pip install django
echo "Django installed successfully."

# Create a new Django project
django-admin startproject $PROJECT_NAME .

# Navigate into the project directory


# Create additional directories
mkdir apps templates static media
echo "Directories 'apps', 'templates', 'static', and 'media' created successfully."

# Run the Django development server
code .