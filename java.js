const textos = [
  //1
    "¿Qué le dice un jardinero a otro? Nos vemos cuando podamos.",
//2
    "Tengo un amigo otaku el otro día que estuva triste, así que lo animé.",
//3
    "¿Has oído hablar del astronauta claustrofóbico? Nomás necesitaba un poco de espacio.",
//4
    "¿Qué es rojo y malo para tus dientes? Un ladrillo.",
//5
    "¿Cómo se despiden los químicos? Ácido un placer.",
//6
    "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
//7
    "¿Qué hay peor que encontrarse un gusano en una manzana? Encontrarse medio gusano.",
    //8
    "¿Cuál es el animal más bipolar? El oso polar.",
    //9
    "¿Qué le dice un techo a otro? Techo de menos.",
    //10
    "Si los zombis se degradan con el paso del tiempo, ¿zombiodegradables?",
    //11
    "En Hawái no te hospedan, te alohan.",
    //12
    "Hay tres tipos de personas en el mundo: los que saben contar y los que no.",
    //13
    "¿Cómo se llama el hermano vegetariano de Bruce Lee? Broco Lee.",
    //14
    "Ayer fui a un Mac con cuatro amigos. Tres eran de sagitario y el cuarto de libra.",
    //15
    "¿Qué son 50 físicos y 50 químicos juntos? 100tíficos.",
    //16
    "¿Cuál es el café más peligroso del mundo? El ex-preso",
    //17
    "El otro día tu mujer me contó un chiste tan bueno que de la risa me caí de la cama.",
    //18
    "¿Qué le dice una iguana a otra? Somos iguanitas.",
    //19
    "Había una vez un chiste tan malo, pero tan malo, que les pegaba a los otros chistes",
    //20
    "¿Dónde cuelga Superman su supercapa? En superchero",
    //21
    "¿Y cuál es la colonia de Superman? Pues superfume.",
    //22
    "¿Qué le dice un huevo a una sartén? Me tienes frito.",
    //23
    "¿Cuál es la montaña más limpia? El volcán. Porque primero echa cenizas y después, lava",
    //24
    "¿Qué le dice un pollito a su enemigo? ¡Caldito seas!",
    //25
    "¿Qué le dice una pared a otra? ¡Nos vemos en la esquina!",
    //26
    "¿Por qué se mató el libro de matemáticas? Porque tenia muchos problemas..",
    //27
    "¿Qué está al final de todo? ¡La letra o!",
    //28
    "¿Cuál es el baile favorito del tomate? ¡La salsa!",
    //29
    "¿Qué le dice un perro a otro? Ni idea no sé como hablan",
    //30
    "¿Cuál es el colmo de un futbolista? ¡Que le hagan la pelota!",
    //31
    "¿Qué le dice un semáforo a un conductor? ¡No me mires, que me estoy cambiando!",
    //32
    "Me sacaron del grupo de WhatsApp de paracaidismo. Se ve que no caía bien.",
    //33
    "¿Cuál es el colmo de un peluquero? Descubrir que en la vida nada es permanente.",
    //44
    "¿Qué le dice un jardinero a otro? Seamos felices mientras podamos.",
    //45
    "Eliminar correos no deseados es muy fácil: spam comido.",
    //46
    "¿Qué dice una cereza mirándose al espejo? ''¿Ceré eza?''",
    //47
    "¿Qué hace un tapper en el bosque? Tapperdido.",
    //48
    "¿Cuál es el colmo de una azafata? Enamorarse del piloto automático.",
    //49
    "¿Cuáles eran los dibujos animados preferidos del capitán del Titanic? Timón y PUMBA",
    //50
    "¿Cómo queda un mago después de comer? Magordito.",
    //51
    "¿Por qué los estadounidenses son malos jugadores de ajedrez? Porque perdieron dos torres.",
    //52
    "A mis parientes mayores les gustaba burlarse de mí en las bodas, diciendo: ¡Tú serás el siguiente!. Pero dejaron de hacerlo enseguida cuando empecé a hacer lo mismo yo en los funerales.",
    //53
    "¿Qué es peor que seis niños colgados de un árbol? Un niño colgado de seis árboles.",
    //54
    "Un tipo se adentra con un niño en el bosque. Este se dirige a él y le dice: Oiga señor, está oscureciendo mucho y tengo miedo. El hombre responde: Imaginate yo que me que tengo que volver solo",
    //55
    "Nunca le rompas el corazón a alguien, solo tienen uno. Rómpele los huesos mejor, tienen 206.",
    //56
    "Doctor, ¿qué me dijo antes? ¿Géminis, Libra? Cáncer",
    //57
    "Doctor, ¿quién es ese hombre alemán que me hace olvidar las cosas? Alzheimer",
    //58
    "¿Que le regalaron al niño si brazos para navidad? No lo sé,todavía no lo abrió",
    //59
    "¿Cuál es el juego más jugado en Afghanistan? El buscaminas",
    //60
    "¿En qué se diferencia un judío de un boy scout? Que el boy scout vuelve del campo.",
    //61
    "¡Eso! ¡Ahoguen a ese desgraciado! Cállate, abuela, lo están bautizando.",
    //62
    "Señor, si yo no puedo adelgazar, haz que engorden todas mis amigas. Amén.",
    //63
    "¿Cómo metes a 100 niños de Somalia dentro de un Ford? Tirando un pedazo de pan adentro.",
    //64
    "Era un niño tan feo, tan feo, que cuando nació el médico dijo: Si no llora en diez minutos, es un tumor",
    //65
    "¡Papá, papá! No quiero ir a América. Calla hijo, sigue nadando",
    //66
    "Una madre le dice a su hija ciega: si te vuelves a portar mal, te cambio los muebles de lugar.",
    //67
    "¿Qué tiene dos patas y sangra mucho? Medio gato.",
    //68
    "Un hombre va a la biblioteca y pide un libro sobre cómo suicidarse. El bibliotecario le dice: no te lo dejo, que luego no lo devuelves.",
    //69
    "El perro de mi novia murió y le compré uno idéntico. Se enfadó y me dijo: ¿qué voy a hacer con 2 perros muertos?",
    //70
    "¿Qué hacen 2 epilépticos en una cabina de teléfono? La fiesta de la espuma.",
    //71
    "¿Por qué se suicidó Hitler? Porque le llegó la factura del gas.",
    //72
    "Si donas un riñón, todo el mundo te quiere y eres un héroe. Pero dona cinco y de repente todo el mundo se escandaliza.",
    //73
    "Nunca olvidaré las últimas palabras de mi abuelo justo antes de morir.''¿Sigues sosteniendo la escalera?''.",
    //74
    "¿Qué tiene mi padre en común con Nemo? No se puede encontrar a ninguno de los dos.",
    //75
    "Si no tienes éxito a la primera, el puenting no es lo tuyo.",
    //76
    "Doctor, ¿tendré cura? Por supuesto, cura, misa y funeral.",
    //77
    "Mi abuelo decía que los jóvenes dependemos demasiado de la tecnología. Así que le desconecté de la máquina de respiración asistida.",
    //78
    "-Acepta usted a María en la salud y en la enfermedad, en la riqueza y en la pobreza hasta que la muerte os separe? -Sí, no, sí, no, no  ",
    //79
    "Traté de advertir a mi hijo sobre jugar a la ruleta rusa. Le entró por un oído y le salió por el otro.",
    //80
    "''Papá, ¿ya tienes los resultados de la prueba de ADN?''. ''Llámame Manolo''.",
    //81
    "Mis padres me criaron como hijo único, lo que fue una putada para mi hermano pequeño.",
    //82
    "Dicen que el mejor camino hacia el corazón de un hombre es a través del estómago. Pero yo creo que apuñalarle directamente en la caja torácica es mucho más fácil.",
    //83
    "En venta: Paracaídas. Usado una vez, nunca abierto, mancha roja de tamaño medio pero mucho no se nota.",
    //84
    "Pensé que abrir una puerta para una señorita era de buenos modales, pero ella me gritó y salió volando del avión.",
    //85
    "''Ay, doctor, estoy muy nervioso. Esta es mi primera operación''. ''No se preocupe. La mía también''.",
    //86
    "¿Cuál es la parte más dura de un vegetal? La silla de ruedas.",
    //87
    "¿Cuál es la diferencia entre Jesucristo y un cuadro de Jesucristo? El cuadro se puede colgar con un solo clavo.",
    //88
    "Hoy ha sido un día terrible. Un autobús ha atropellado a mi ex. ¡Y para colmo me han echado de mi trabajo como conductor de autobús!",
    //89
    "¿Por qué los cigarrillos son buenos para el medio ambiente? Matan gente.",
    //90
    "Mi novia me dejó, así que le robé la silla de ruedas. Adivina quién volvió arrastrándose...",
    //91
    "Un niño vuelve a su casa despues del colegio... -Mamá, ¿Por qué huele tan mal?, mamá, mamá...",
    //92
  ];

  let textoAnterior = "";

  function generarTexto() {
    let textoAleatorio = obtenerTextoAleatorio();
    
    // Muestra el texto aleatorio en el elemento con id "randomText"
    document.getElementById("randomText").innerText = textoAleatorio;

    // Almacena el texto generado como el texto anterior
    textoAnterior = textoAleatorio;
  }

  function obtenerTextoAleatorio() {
    let textoAleatorio = textoAnterior;

    // Evitar repetir el mismo texto consecutivamente
    while (textoAleatorio === textoAnterior) {
      const indiceAleatorio = Math.floor(Math.random() * textos.length);
      textoAleatorio = textos[indiceAleatorio];
    }

    return textoAleatorio;
  }