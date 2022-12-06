# VTU Project

### Topify 
What is topify ? Topify is a vtu platform built for vendors which enables them perform various subscriptions such as data, airtime subscription and more.

### Figma Link
> [Team Topify Figma ](https://www.figma.com/file/uDuDEveBh2Zy3srvToYX1J/voom?node-id=277%3A22972&t=RbaU6KeVIPKbA3Xx-1)


### Project Documentation
 > [Team Topify Documentation]()

Clone the project 
```
git clone  https://github.com/Topperize/VTU.git
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

see **[Contribution.md](https://github.com/Topperize/VTU/blob/main/Contribution.md)**
