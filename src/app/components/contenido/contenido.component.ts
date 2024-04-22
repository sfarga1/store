import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  standalone: true,
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  secciones  = [
    { 'titulo': 'Belgrado, Serbia',
    'contenido': 'Bienvenido a la vibrante y dinámica ciudad de Belgrado, la joya de los Balcanes. Sumérgete en una experiencia única donde la historia y la modernidad se entrelazan de manera fascinante. Explora la majestuosidad de la Fortaleza de Belgrado, testigo de siglos de historia y conquistas. Déjate seducir por el encanto bohemio de Skadarlija, con sus calles empedradas y restaurantes tradicionales. Y no te pierdas la animada vida nocturna a lo largo del río Danubio y el río Sava. Belgrado te espera con los brazos abiertos para ofrecerte una experiencia inolvidable llena de cultura, gastronomía y diversión.',
    'imagen': "/assets/img/Belgrado.jpg",
    'id': 'belgrado' },
    { 'titulo': 'Tesalónica, Grecia',
    'contenido': 'Descubre la cautivadora ciudad de Tesalónica, un destino lleno de historia, cultura y encanto mediterráneo. Pasea por las estrechas calles de su casco antiguo y maravíllate con los restos arqueológicos que revelan su pasado romano, bizantino y otomano. Visita la imponente Torre Blanca y contempla las impresionantes vistas panorámicas de la ciudad y el mar Egeo. Sumérgete en la bulliciosa vida de la ciudad en el animado paseo marítimo y saborea la deliciosa gastronomía local en sus acogedores restaurantes. En Tesalónica, cada esquina cuenta una historia y cada experiencia es una aventura que no olvidarás.',
    'imagen': "/assets/img/Tesalonica.jpg",
    'id': 'tesalonica'  },
    { 'titulo': 'Oslo, Noruega',
    'contenido': 'Embárcate en una emocionante aventura en la vibrante ciudad de Oslo, donde la modernidad se combina con la belleza natural de los fiordos noruegos. Explora los fascinantes museos como el Museo Munch y el Museo de Barcos Vikingos, que te sumergirán en la rica historia y cultura noruega. Disfruta de un paseo por el animado barrio de Grünerløkka, lleno de galerías de arte, cafeterías y tiendas de diseño. Admira la majestuosidad del Parque Vigeland, hogar de las famosas esculturas de Gustav Vigeland. Y no te pierdas la experiencia única de navegar por el fiordo de Oslo y contemplar la belleza natural que rodea la ciudad. Oslo te espera con una mezcla perfecta de naturaleza, cultura y modernidad.',
    'imagen': "/assets/img/Oslo.jpg",
    'id': 'oslo'  },
    { 'titulo': 'Praga, República Checa',
    'contenido': 'Sumérgete en la magia de la cautivadora ciudad de Praga, un destino que te transportará a través de siglos de historia y arquitectura impresionante. Pasea por el Puente de Carlos, que une las dos orillas del río Moldava, y maravíllate con las magníficas vistas de los emblemáticos edificios que bordean el río. Explora el imponente Castillo de Praga, que domina el horizonte de la ciudad y alberga tesoros históricos como la Catedral de San Vito. Disfruta de la animada atmósfera de la Plaza de la Ciudad Vieja, donde podrás admirar el famoso Reloj Astronómico y degustar la deliciosa cocina checa en los acogedores restaurantes. Praga, con su encanto medieval y su ambiente romántico, te conquistará desde el primer momento.',
    'imagen': "/assets/img/Praga.jpg",
    'id': 'praga'  }
  ];
}
