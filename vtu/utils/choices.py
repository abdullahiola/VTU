from django.db import models

class Bank(models.TextChoices):
    Firstbank = "first bank", "First Bank of Nigeria"
    UBA = "uba", 'UBA'


# banks = (
#     ('first bank','First Bank of Nigeria'),
#     ('uba','UBA'),
#     ('access','Access Bank'),
#     ('wema','Wema Bank'),
#     ('diamond','Diamond Bank'),
#     ('heritage','Heritage bank'),
#     ('sky','Sky Bank'),
#     ('stanbic','Stanbic IBTC'),
#     ('sterling','Sterling Bank'),
#     ('union','Union Bank'),
#     ('zenith','Zenith Bank'),
#     ('unity','Unity Bank'),
#     ('fcmb','FCMBank'),
#     ('gtb','GTBank'),
#     ('fidelity','FIdelity Bank'),
#     ('eco','ECO Bank'),

# )
# status =(
#     ('pending','Pending'),
#     ('failed','Failed'),
#     ('successful','Successful'),
# )

# Network =(
#     ('mtn','MTN'),
#     ('glo','GLO'),
#     ('airtel','AIRTEL'),
#     ('etisalate','ETISALAT'),
    
# )
# Data_plan  = (
#     ('mtn_1gb','MTN  1GB  #800'),
#     ('mtn_2gb','MTN  2GB  #1,550'),
#     ('mtn_3gb','MTN  3GB  #2,250'),
#     ('mtn_5gb','MTN  5GB  #3,750'),

#     ('9mobile_1gb','9MOBILE  1GB  #700'),
#     ('9mobile_1.5gb','9MOBILE  1.5GB  #1,050'),
#     ('9mobile_2gb','9MOBILE  2GB  #1,400'),
#     ('9mobile_3gb','9MOBILE  3GB  #2,000'), 
#     ('9mobile_5gb','9MOBILE  5GB  #3,500'),
#     ('9mobile_11gb','9MOBILE 11GB  #7,500'), 

#     ('airtel_1.5gb','AIRTEL 1.5GB #900'),
#     ('airtel_3.5gb','AIRTEL 3.5GB #1,0850'),
#     ('airtel_5gb','AIRTEL 5GB #2,330'),
#     ('airtel_7gb','AIRTEL 7GB #3,300'),


#     ('glo_1.6gb','GLO 1.6/2GB 900#'),
#     ('glo_3.65gb','GLO 3333.65/4.5GB  2,250#'),
#     ('glo_5.7gb','GLO 5.7/7.2GB #2,650'),
#     ('glo_10gb','GLO 10/12.5GB #3,550'),
#     ('glo_20gb','GLO 20GB #7,000'),
#     ('glo_26gb','GLO 26GB #8000'),
#     ('glo_42gb','GLO 42GB #13,000'),
    
    
# )
# Paying_method  = (
#     ('Airtime Pin','Airtime Pin'),
#     ('Bank  Transfer','Bank Transfer'),
#     ('Wallet','Wallet'),
#     ('Airtime tranfer','Airtime tranfer'),
    
# )
# Airtime_choice =(
#     ('100' , '#100'),
#     ('500','#500'),
#     ('1000','#1000'),
#     ('5000','#5000'),
#     ('1000','#1000'),
# )