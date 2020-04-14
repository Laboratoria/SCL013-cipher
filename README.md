## 1. Vantruar

Es una aplicación para tener conversaciones secretas entre parejas extramaritales, la cual consiste en cifrar mensajes para que los conyuges no puedan descubrir a las partes in fraganti. 
El cifrado de mensajes lo da el usuario a través de una selección de desplazamientos ubicados en el boton "select". También es posible cifrar la letra "Ñ" y el caracter especial "espacio", "punto" y "coma". 
No acepta cifrar números, palabras con tílde, ni otros caracteres especiales a excepción de los antes mencionados.

Usuario final: Parejas infieles.

Decisiones de diseño: Nuestro logo es totalmente discreto y no revela el objetivo de la aplicación, los colores dan un toque minimalista y sutil.
El nombre Vantruar fue elegido a través de la traducción en Islandés de la palabra "Infiel".

Confidencialidad: Debe ingresar un nombre de usuario y no un e-mail para evitar almacenamientos de datos y claves, por lo mismo se entregará un código aleatorio cada vez que se ingrese a la aplicación y este código debe ser replicado por la otra parte en el espacio "¿Ya tienes un código? Ingrésalo aquí". Vantruar jamás pedirá algún dato identificatorio de los usuarios.

Prototipo de la aplicación: https://barbaramadariaga422646.invisionapp.com/console/prtotipo-vantruar-ck8w3gxqv2tum01668kpl5kp7/ck8w3hmgk2u070179twkjhdir/play 

En este prototipo se podrá ver a grandes rasgos el funcionamiento de la página.

## 2. Uso de la aplicación
 ## 2.1 Usuario_1 (que envía el código)
    El Usuario_1 debe ingresar un nombre el cual puede ser un apodo, seudónimo, etc. y hacer click en el boton "Obtener código". La aplicacion entregará un codigo de 4 dígitos totalmente aleatorio y debe ser enviado a la contraparte (Usuario_2). Luego de eso debe hacer click en el boton "Ingresar".
    Posterior a eso, la página redireccionará a la parte de entrada de texto. El Usuario_1 debe seleccionar el número de desplazamiento, considerando que 1 corresponde a la letra siguiente que ingrese (ej: A -> B); y 25 corresponde a 25 espacios después (ej: A -> Z). Si elige un número superior a 25, da la vuelta desde el inicio (el número 26 fue omitido ya que no es funcional, ya que da el mensaje original)
    Una vez escrito el mensaje, presionar el boton "cifrar" el mensaje cifrado debe ser copiado por el Usuario_1 y este lo debe pegar en alguna aplicacion de mensajeria de texto (Whatsapp, Facebook Messenger, SMS, Telegram, etc.) Informar también al Usuario_2 el número de desplazamiento que utilizó para que pueda descifrar el mensaje enviado.

  ## 2.2 Usuario_2 (que recibe el código)
    El Usuario_2 debe ingresar el código que fue previamente enviado por Usuario_1 e ingresar a la plataforma de texto. Debe seleccionar el número de desplazamiento entregado por el Usuario_1 y luego copiar el mensaje cifrado desde su aplicación de mensajería y pegarlo en recuadro de texto superior. Una vez realizado esto debe hacer "click" en el boton "Descifrar" y se mostrará el mensaje original de Usuario_1.

## 3. ¿Que es cifrado César?

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.