#!/bin/bash
# run this in terminal =====> chmod +x setup.sh
# and run =====>./setup.sh
# and run this command in terminal =====> docker compose exec backend python manage.py createsuperuser

# enter a username
# enter password
# enter y 

#http://localhost:8000/admin

# enter username and password to login in panel admin

# Step 1: Build Docker containers
echo "Building Docker containers..."
docker compose build

# Step 2: Start the containers
echo "Starting Docker containers..."
docker compose up
# docker compose up -d


# Step 3: Apply migrations for Django (if necessary)
echo "Running Django migrations..."
docker compose exec backend python manage.py makemigrations
docker compose exec backend python manage.py migrate




# Step 4: Install dependencies for frontend (if necessary)
# echo "Installing frontend dependencies..."
# docker compose exec nextjs_frontend npm install

# Step 5: Optional - Collect static files for Django (if needed)
# echo "Collecting static files for Django..."
# docker compose exec django_backend python manage.py collectstatic --noinput

# echo "Setup completed successfully!"
