# In order to write your dependencies to file use this command within your virtual env
pip freeze > dependencies.txt
#and commit dependcies.txt file

#run server
python ./tictactoe/manage.py runserver

#create app
python manage.py startapp {appname}

#Create migration
python .\manage.py makemigrations
python .\manage.py sqlmigrate {nameOfApp} {nameOfMigratation}
python .\manage.py migrate