# VTU Project

### Topify 
What is topify ? Topify is a vtu platform built for vendors which enables them perform various subscriptions such as datv, airtime subscription and more.

### Figma Link
> [Team Topify Figma ]()


### Project Documentation
 > [Team Topify Documentation]()

Clone the project 
```
git clone https://github.com/abdullahiola/VTU.git
```

Enter the project directory 

```
cd VTU
```

Create a virtual env

```
python -m venv env 
```

Activate your env(for windows)

```
./env/Scripts/activate 	 
```
(for linux or mac)

```
source env/bin/activate 
``` 

Install Project Dependencies

```
pip install -r requirements.txt
```

Make Migrations

```
python manage.py makemigrations
python manage.py migrate
```


Create Superuser

```
python manage.py createsuperuser
```

Run the server

```
python manage.py runserver
```

## To contribute :

### NOTE :

- Don't push to the main branch
- Create a branch and switch to it ` git checkout -b (branchname)` *Dont include brackets*
- After finishing your tasks run `git pull origin main ` then `git push (your branchname)`

```
git add .
git commit -m " The task you did "
git push branchname 

```
