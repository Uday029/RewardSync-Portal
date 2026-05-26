#!/bin/bash

# Initialize git locally
git init
git config user.name "AI Agent"
git config user.email "ai@example.com"

# Add and commit
git add .
git commit -m "Initial commit of RewardSync portal"

# Create a public GitHub repository using gh CLI and push code
echo "Creating GitHub repository..."
gh repo create rewardsync --public --source=. --remote=origin --push

# Deploy to GitHub pages via gh-pages script
echo "Deploying to GitHub Pages..."
npm run deploy
