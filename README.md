# VTU

### Instructions

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
