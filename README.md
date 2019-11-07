![alt text](https://lh3.googleusercontent.com/9XKgLWecXp5JPVlETWV9D48X62dZvASvDUrgnKxxlFQW4rH90GEXtPZ7tBqyX8mY8el2fNSDRb0w_cbdFOhQKjdmCVAzY6ztfWBEuMa-vuaTsokgsBbwNO3HR19H2gwlIVEdtu_GnDNA11gkYY1JXcdHUdxGajB2Rp0MGZxXHgto51TZYF5WtNHAoOsEf3zq6I6XvZJJEp-bnjKy8xLB1Lp6eg9Q6ozruDvheKd0LgzRWfQuuPa0uH0qWaRyrREcl91zgWowXzeqQxL-E4SejkrZnUHGr4U9ZKVv2tNhvha8mGHqCWZEQi2ynCauY_xdpDP5Hb81Fm-Ps4wi66Kj2QQ734ZNlmj9ouh-zZNccyrzG7-K0Hmf8CcQAWmipDp_HX9rGdmxz6eCaIy7BjlCnNqpQo9t9NG5yGyPTRKaD8_QXTpMgS7b9kxXbF3Rkgq7zBnQ5WU0mwzKXQdk96HPc4eD6cBXCyz96jKqnd5uQGLviXnry19vitqjZuQUeLpcOTUIaKfqdEfpTeef4Zj4aU16JDyCp-1lIL7PCudYZW_NFfnilEikLqtK0gHXFySjlcJbYO-s5rJPQirc6V4SlvsmB9Tk9nHBMvzxHy-tUtfTKNlyp_gq7dNDo99toh63s-VNpgpgwLmNC_fF035UOY8l8XtxpNJKhkHlT-xA60ftPKKNSvq8i0z7=w607-h289-no "title")

# PROYECTO CIFRADO CESAR

## **REBEL CIPHER**

![alt text](https://cdn0.iconfinder.com/data/icons/movies-8/64/rebel_alliance_hollywood_cinema_film-128.png "logo")

### 1. Tema Elegido
#### Mensajería Cifrada para uso de la Alianza Rebelde

Si Leia cifra un mensaje con su llave privada, Luke solo podrá descifrar el mensaje si se le proporciona dicha clave,  lo cual asegura la confidencialidad y protección ante la amenaza del Imperio.
___
### 2. Descripción del Proyecto

Página para cifrar mensajes de la alianza. 
El usuario selecciona una codificación e introduce un mensaje, la página le genera el mensaje codificado.
El usuario envia el mensaje codificado, proporcionando la clave, que es un número del 1 al 20.
El receptor selecciona la clave (codificación) e introduce el mensaje codificado.
La página le entrega el mensaje decodificado.
___
### 3. Investigación UX
#### Main User:
Células pequeñas y grandes de la alianza rebelde.
#### Interfaz:
Al considerar las necesidades de los _usuarios principales_, se creará una interfaz sencilla, fácil y rápida de usar, ya que se usará en condiciones discretas y quizá hostiles. Se considera la integridad estética y la simplicidad, con consistencia, precisión y responsividad.
#### Problema
Se necesita comunicarse a traves del espacio, dichas transmisiones pueden ser interceptadas, lo cual puede generar problemas al momento de generar estrategias de ataque, es necesario que estén codificadas para que el _Imperio_ no las entienda.
#### Solución
Sistema de codificación _en línea_ simple, discreto y ligero.
___
### 4. Primer Prototipo

![alt text](https://lh3.googleusercontent.com/20pt6EioE609APW-l0_2zibIdh4hRZo0Cc3QjUj7jdep-X9lePPRTMdPqBg5eBJ5KSywsydUndvvRvKQiltgBs3VdPxSD8Ua4pTnmjJJpyE6EeYdOdOmA9IfyeJjk0NJ12v-UrsZyAA0qCvOLM08Ts-fGNI_VE-p0VBpH1H_sw3p5npu2hl1w8vDbyHzO9BHGI7Cq9XtfIcTI_Ch-gfTvNsJMFGy7cIEtvibggJ1_0WyJ8kdM3hYzkfhVyrz-E8QSIvb2JFEUu3qHUphMW8jxr2Cmro25SofCVQBZk9aT859LN-nMl7UlrGoxhoYK4sqZO9bJMhFcsT9zb2j8x6aubwsxQd4z383-XJPF9VMXkp_eiJyyDVdokouACcLPA4TsRNFKvzD27oFzgEQfAXPKTDRmOCT2CxNZASGRyQ2rwOkxwB_JzIKBfzLqmGQmF5H_8sjLD2hGjLOTVWCkD1I04fa7DsH6LKYrAsjcoaCU6F_XS9A4U7OThjKoH6jsS3pUeO9fFEAqAAyVNTy8gnez5anpcQPQgcjP0LaohZKtxlxe6wimIPoGojxh8rBD4FYwGulu2Iyg1TWjxx8RmStHyR7B8Yl0OiwSiusYVjIdh367EFKOwf23Oog5yxpExfSaIWdHiMfqXPpHD235JggcgsXJtYBgPWN_7Tfqkk8CLMWvy39YXgDAudi=w948-h757-no "primerproto")
___
### 5. Diagrama de Flujo y Pseudocódigo

![alt text](https://i.ibb.co/M2wD5Xg/diagram.jpg "diagrama")

#### PseudoCódigo

Describir de forma simple, las acciones que realizará el programa.
* Agregar UI (Cifrar / Descifrar)
* Botón cifrar recibe string y número
* Botón descifrar recibe string y número
* Recibir un valor string
* Bloquear introducción de números y convertir automáticamente a mayus.
* Recibir valor númerico seleccionado del menú desplegable
* Para cifrar
* Desplazar los caracteres de acuerdo al número seleccionado
* Mostrar mensaje cifrado
* Para descifrar
* Desplazar de regreso los caracteres de acuerdo al numero seleccionado
* Mostrar mensaje descifrado
* Agregar UI (Volver a comenzar).


### 6. FeedBack
#### Squad

El feedback que recibí sobre mi prototipo por parte de mi squad me hizo darle un mejor acomodo para facilitar el uso de la página web.
Además, se me comentó que se vería mejor si se pusieran solo letras en los títulos y no números como se mostraba en el prototipo inicial y creo que eso ayudó mucho a que se viera mejor la página.

#### Coaches

Recibí feedback sobre la forma de organizar mi trabajo en el tablero kan-ban y la forma de dividir tareas. Además, me fue de gran utilidad su apoyo a lo largo del proyecto :)
___
### 6. Prototipo Final
**Prototipo realizado en software Adobe XD**

#### Prototipo de la parte CIPHER.

![alt text](https://i.ibb.co/jkbM6PJ/prototypecipher.png "protocipher")

#### Prototipo de la parte DECIPHER.

![alt text](https://i.ibb.co/wLQFDhg/prototypedecipher.png "protdecipher")
___
### 7. Conclusiones

En este proyecto me divertí mucho descubriendo como realizar cada una de las tareas requeridas, y siento que cumplí los objetivos de aprendizaje. 
Ha sido muy satisfactorio lograr lo que me propongo mediante la organización de mis tareas y aunque requerí mayormente la parte técnica, no lo hubiera logrado sin los soft skills que nos han instruido en el poco tiempo que lleva el bootcamp.
___