import { SoccerBall } from '@/components/soccerball';
import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  BackHandler,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export const YEARS_DATA = [
  {
    id: '2026',
    anio: '2026',
    sede: 'USA, México y Canadá',
    descripcion: '¡La Tri se clasifica por cuarta ocasión en su historia al Mundial!',
    tecnico: 'Sebastián Beccacece (Argentina)',
    jugadores: [
      { dorsal: '1', nombre: 'Hernán Galíndez', pos: 'POR' },
      { dorsal: '12', nombre: 'Moisés Ramírez', pos: 'POR' },
      { dorsal: '22', nombre: 'Gonzalo Valle', pos: 'POR' },
      { dorsal: '2', nombre: 'Félix Torres', pos: 'DEF' },
      { dorsal: '3', nombre: 'Piero Hincapié', pos: 'DEF' },
      { dorsal: '4', nombre: 'Jackson Porozo', pos: 'DEF' },
      { dorsal: '6', nombre: 'Willian Pacho', pos: 'DEF' },
      { dorsal: '7', nombre: 'Pervis Estupiñán', pos: 'DEF' },
      { dorsal: '17', nombre: 'Ángelo Preciado', pos: 'DEF' },
      { dorsal: '-', nombre: 'Joel Ordóñez', pos: 'DEF' },
      { dorsal: '23', nombre: 'Moisés Caicedo', pos: 'MED' },
      { dorsal: '8', nombre: 'Alan Franco', pos: 'MED' },
      { dorsal: '10', nombre: 'Kendry Páez', pos: 'MED' },
      { dorsal: '18', nombre: 'Denil Castillo', pos: 'MED' },
      { dorsal: '-', nombre: 'Jordy Alcívar', pos: 'MED' },
      { dorsal: '-', nombre: 'Pedro Vite', pos: 'MED' },
      { dorsal: '-', nombre: 'Yaimar Medina', pos: 'MED' },
      { dorsal: '13', nombre: 'Enner Valencia', pos: 'DEL' },
      { dorsal: '11', nombre: 'Kevin Rodríguez', pos: 'DEL' },
      { dorsal: '19', nombre: 'Gonzalo Plata', pos: 'DEL' },
      { dorsal: '9', nombre: 'John Yeboah', pos: 'DEL' },
      { dorsal: '-', nombre: 'Anthony Valencia', pos: 'DEL' },
      { dorsal: '-', nombre: 'Jordy Caicedo', pos: 'DEL' },
      { dorsal: '-', nombre: 'Jeremy Arévalo', pos: 'DEL' },
      { dorsal: '-', nombre: 'Alan Minda', pos: 'DEL' },
      { dorsal: '-', nombre: 'Nilson Angulo', pos: 'DEL' }
    ],
    resena: 'Ecuador se prepara para su quinta participación en una Copa del Mundo, la cual se celebrará en Canadá, Estados Unidos y México en 2026. La expectativa es alta, ya que la selección cuenta con una "Generación Dorada" de jugadores jóvenes y talentosos que militan en importantes ligas europeas. Clasificó en el segundo lugar de las eliminatorias de la CONMEBOL, demostrando un gran potencial para superar sus actuaciones anteriores.',
    enfrentamientos: [
      'Costa de Marfil vs. Ecuador (14 de junio de 2026)',
      'Ecuador vs. Curazao (20 de junio de 2026)',
      'Ecuador vs. Alemania (25 de junio de 2026)'
    ],
    imagen: require('@/assets/images/players/seleccion_2026.jpeg')
  },
  {
    id: '2022',
    anio: '2022',
    sede: 'Catar',
    descripcion: 'Gran victoria frente al anfitrión en el partido inaugural con doblete de Enner Valencia.',
    tecnico: 'Gustavo Alfaro (Argentina)',
    jugadores: [
      { dorsal: '1', nombre: 'Hernán Galíndez', pos: 'POR' },
      { dorsal: '2', nombre: 'Félix Torres', pos: 'DEF' },
      { dorsal: '3', nombre: 'Piero Hincapié', pos: 'DEF' },
      { dorsal: '4', nombre: 'Robert Arboleda', pos: 'DEF' },
      { dorsal: '5', nombre: 'José Cifuentes', pos: 'MED' },
      { dorsal: '6', nombre: 'Willian Pacho', pos: 'DEF' },
      { dorsal: '7', nombre: 'Pervis Estupiñán', pos: 'DEF' },
      { dorsal: '8', nombre: 'Carlos Gruezo', pos: 'MED' },
      { dorsal: '9', nombre: 'Ayrton Preciado', pos: 'MED' },
      { dorsal: '10', nombre: 'Romario Ibarra', pos: 'MED' },
      { dorsal: '11', nombre: 'Michael Estrada', pos: 'DEL' },
      { dorsal: '12', nombre: 'Moisés Ramírez', pos: 'POR' },
      { dorsal: '13', nombre: 'Enner Valencia', pos: 'DEL' },
      { dorsal: '14', nombre: 'Xavier Arreaga', pos: 'DEF' },
      { dorsal: '15', nombre: 'Ángel Mena', pos: 'MED' },
      { dorsal: '16', nombre: 'Jeremy Sarmiento', pos: 'MED' },
      { dorsal: '17', nombre: 'Ángelo Preciado', pos: 'DEF' },
      { dorsal: '18', nombre: 'Diego Palacios', pos: 'DEF' },
      { dorsal: '19', nombre: 'Gonzalo Plata', pos: 'MED' },
      { dorsal: '20', nombre: 'Jhegson Méndez', pos: 'MED' },
      { dorsal: '21', nombre: 'Alan Franco', pos: 'MED' },
      { dorsal: '22', nombre: 'Alexander Domínguez', pos: 'POR' },
      { dorsal: '23', nombre: 'Moisés Caicedo', pos: 'MED' },
      { dorsal: '24', nombre: 'Djorkaeff Reasco', pos: 'DEL' },
      { dorsal: '25', nombre: 'Jackson Porozo', pos: 'DEF' },
      { dorsal: '26', nombre: 'Kevin Rodríguez', pos: 'DEL' }
    ],
    resena: 'Ecuador tuvo el honor de disputar el partido inaugural de la Copa Mundial de 2022 contra el anfitrión, Catar, logrando una victoria histórica. Clasificó en cuarto lugar de la CONMEBOL. Aunque mostró un gran nivel al empatar con Países Bajos, una derrota ante Senegal en el último partido de la fase de grupos significó su eliminación del torneo.',
    enfrentamientos: [
      'Catar 0 - 2 Ecuador (Goles: Enner Valencia x2)',
      'Países Bajos 1 - 1 Ecuador (Gol: Enner Valencia)',
      'Ecuador 1 - 2 Senegal (Gol: Moisés Caicedo)'
    ],
    imagen: require('@/assets/images/players/seleccion_2022.jpeg')
  },
  {
    id: '2014',
    anio: '2014',
    sede: 'Brasil',
    descripcion: 'Tercer mundial de la Tri, logrando una victoria de 2-1 ante Honduras.',
    tecnico: 'Reinaldo Rueda (Colombia)',
    jugadores: [
      { dorsal: '1', nombre: 'Máximo Banguera', pos: 'POR' },
      { dorsal: '2', nombre: 'Jorge Guagua', pos: 'DEF' },
      { dorsal: '3', nombre: 'Frickson Erazo', pos: 'DEF' },
      { dorsal: '4', nombre: 'Juan Carlos Paredes', pos: 'DEF' },
      { dorsal: '5', nombre: 'Renato Ibarra', pos: 'MED' },
      { dorsal: '6', nombre: 'Christian Noboa', pos: 'MED' },
      { dorsal: '7', nombre: 'Jefferson Montero', pos: 'MED' },
      { dorsal: '8', nombre: 'Édison Méndez', pos: 'MED' },
      { dorsal: '9', nombre: 'Joao Rojas', pos: 'DEL' },
      { dorsal: '10', nombre: 'Walter Ayoví', pos: 'MED' },
      { dorsal: '11', nombre: 'Felipe Caicedo', pos: 'DEL' },
      { dorsal: '12', nombre: 'Adrián Bone', pos: 'POR' },
      { dorsal: '13', nombre: 'Enner Valencia', pos: 'DEL' },
      { dorsal: '14', nombre: 'Oswaldo Minda', pos: 'MED' },
      { dorsal: '15', nombre: 'Michael Arroyo', pos: 'DEL' },
      { dorsal: '16', nombre: 'Antonio Valencia', pos: 'MED' },
      { dorsal: '17', nombre: 'Jaime Ayoví', pos: 'DEL' },
      { dorsal: '18', nombre: 'Oscar Bagüí', pos: 'DEF' },
      { dorsal: '19', nombre: 'Luis Saritama', pos: 'MED' },
      { dorsal: '20', nombre: 'Fidel Martínez', pos: 'MED' },
      { dorsal: '21', nombre: 'Gabriel Achilier', pos: 'DEF' },
      { dorsal: '22', nombre: 'Alexander Domínguez', pos: 'POR' },
      { dorsal: '23', nombre: 'Carlos Gruezo', pos: 'MED' }
    ],
    resena: 'Tras una ausencia en el Mundial de 2010, Ecuador regresó a la cita mundialista en Brasil 2014, clasificando en el cuarto lugar de la CONMEBOL. Su actuación en el torneo fue de contrastes: una derrota agónica ante Suiza, una victoria contra Honduras y un empate valioso frente a Francia. A pesar de los esfuerzos, no logró superar la fase de grupos.',
    enfrentamientos: [
      'Suiza 2 - 1 Ecuador (Gol: Enner Valencia)',
      'Honduras 1 - 2 Ecuador (Goles: Enner Valencia x2)',
      'Ecuador 0 - 0 Francia'
    ],
    imagen: require('@/assets/images/players/seleccion_2014.jpeg')
  },
  {
    id: '2006',
    anio: '2006',
    sede: 'Alemania',
    descripcion: '¡La mejor participación histórica! Clasificamos por primera vez a Octavos de Final.',
    tecnico: 'Luis Fernando Suárez (Colombia)',
    jugadores: [
      { dorsal: '1', nombre: 'Edwin Villafuerte', pos: 'POR' },
      { dorsal: '2', nombre: 'Jorge Guagua', pos: 'DEF' },
      { dorsal: '3', nombre: 'Iván Hurtado', pos: 'DEF' },
      { dorsal: '4', nombre: 'Ulises de la Cruz', pos: 'DEF' },
      { dorsal: '5', nombre: 'José Luis Perlaza', pos: 'MED' },
      { dorsal: '6', nombre: 'Paul Ambrosi', pos: 'DEF' },
      { dorsal: '7', nombre: 'Christian Lara', pos: 'MED' },
      { dorsal: '8', nombre: 'Édison Méndez', pos: 'MED' },
      { dorsal: '9', nombre: 'Felix Borja', pos: 'DEL' },
      { dorsal: '10', nombre: 'Iván Kaviedes', pos: 'DEL' },
      { dorsal: '11', nombre: 'Agustín Delgado', pos: 'DEL' },
      { dorsal: '12', nombre: 'Cristian Mora', pos: 'POR' },
      { dorsal: '13', nombre: 'Paul Ambrosi', pos: 'DEF' },
      { dorsal: '14', nombre: 'Segundo Castillo', pos: 'MED' },
      { dorsal: '15', nombre: 'Marlon Ayoví', pos: 'MED' },
      { dorsal: '16', nombre: 'Antonio Valencia', pos: 'MED' },
      { dorsal: '17', nombre: 'Giovanny Espinoza', pos: 'DEF' },
      { dorsal: '18', nombre: 'Neicer Reasco', pos: 'DEF' },
      { dorsal: '19', nombre: 'Luis Saritama', pos: 'MED' },
      { dorsal: '20', nombre: 'Edwin Tenorio', pos: 'MED' },
      { dorsal: '21', nombre: 'Carlos Tenorio', pos: 'DEL' },
      { dorsal: '22', nombre: 'Damian Lanza', pos: 'POR' },
      { dorsal: '23', nombre: 'Christian Benítez', pos: 'DEL' }
    ],
    resena: 'La participación de Ecuador en Alemania 2006 es considerada la más exitosa en su historia mundialista. Clasificando en tercer lugar de las eliminatorias sudamericanas, la "Tri" sorprendió al mundo al avanzar por primera vez a los octavos de final. En esta instancia, fue eliminada por Inglaterra en un ajustado partido, pero su desempeño dejó una huella imborrable en la afición ecuatoriana.',
    enfrentamientos: [
      'Polonia 0 - 2 Ecuador (Goles: Carlos Tenorio, Agustín Delgado)',
      'Ecuador 3 - 0 Costa Rica (Goles: Carlos Tenorio, Agustín Delgado, Iván Kaviedes)',
      'Ecuador 0 - 3 Alemania',
      'Inglaterra 1 - 0 Ecuador (Octavos de Final)'
    ],
    imagen: require('@/assets/images/players/seleccion_2006.jpeg')
  },
  {
    id: '2002',
    anio: '2002',
    sede: 'Corea/Japón',
    descripcion: 'Nuestra primera e histórica clasificación mundialista con el gol inolvidable de Kaviedes.',
    tecnico: 'Hernán Darío "Bolillo" Gómez (Colombia)',
    jugadores: [
      { dorsal: '1', nombre: 'José Francisco Cevallos', pos: 'POR' },
      { dorsal: '2', nombre: 'Augusto Poroso', pos: 'DEF' },
      { dorsal: '3', nombre: 'Iván Hurtado', pos: 'DEF' },
      { dorsal: '4', nombre: 'Ulises de la Cruz', pos: 'DEF' },
      { dorsal: '5', nombre: 'Alfonso Obregón', pos: 'MED' },
      { dorsal: '6', nombre: 'Raúl Guerrón', pos: 'DEF' },
      { dorsal: '7', nombre: 'Nicolás Asencio', pos: 'MED' },
      { dorsal: '8', nombre: 'Luis Gómez', pos: 'DEF' },
      { dorsal: '9', nombre: 'Iván Kaviedes', pos: 'DEL' },
      { dorsal: '10', nombre: 'Álex Aguinaga', pos: 'MED' },
      { dorsal: '11', nombre: 'Agustín Delgado', pos: 'DEL' },
      { dorsal: '12', nombre: 'Oswaldo Ibarra', pos: 'POR' },
      { dorsal: '13', nombre: 'Ángel Fernández', pos: 'DEL' },
      { dorsal: '14', nombre: 'Juan Carlos Burbano', pos: 'MED' },
      { dorsal: '15', nombre: 'Marlon Ayoví', pos: 'DEF' },
      { dorsal: '16', nombre: 'Cléber Chalá', pos: 'MED' },
      { dorsal: '17', nombre: 'Giovanny Espinoza', pos: 'DEF' },
      { dorsal: '18', nombre: 'Carlos Tenorio', pos: 'DEL' },
      { dorsal: '19', nombre: 'Édison Méndez', pos: 'MED' },
      { dorsal: '20', nombre: 'Edwin Tenorio', pos: 'MED' },
      { dorsal: '21', nombre: 'Wellington Sánchez', pos: 'MED' },
      { dorsal: '22', nombre: 'Daniel Viteri', pos: 'POR' },
      { dorsal: '23', nombre: 'Walter Ayoví', pos: 'DEF' }
    ],
    resena: 'La Copa Mundial de 2002 marcó un hito histórico para el fútbol ecuatoriano al ser su primera clasificación a la máxima cita mundialista. Bajo la dirección técnica del colombiano Hernán Darío "Bolillo" Gómez, Ecuador logró su pase tras una destacada eliminatoria sudamericana, finalizando en el segundo lugar. Aunque su participación en el torneo fue breve, culminando en la fase de grupos, dejó un legado importante al conseguir su primera victoria mundialista.',
    enfrentamientos: [
      'Italia 2 - 0 Ecuador',
      'México 2 - 1 Ecuador (Gol: Agustín Delgado)',
      'Ecuador 1 - 0 Croacia (Gol: Édison Méndez)'
    ],
    imagen: require('@/assets/images/players/seleccion_2002.jpeg')
  }
];

export default function HomeScreen() {
  const router = useRouter();

  const cerrarApp = () => {
    if (Platform.OS === 'android') {
      Alert.alert(
        'Cerrar Aplicación',
        '¿Estás seguro de que deseas salir de Tri GO?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Salir', onPress: () => BackHandler.exitApp() }
        ]
      );
    } else {
      Alert.alert(
        'Tri GO',
        'En iOS las aplicaciones se cierran deslizando hacia arriba en el administrador de tareas.'
      );
    }
  };

  const irAlDetalle = (anio: string) => {
    router.push({
      pathname: '/detalle/[anio]',
      params: { anio }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner superior con escudo de la Selección */}
        <View style={styles.headerBanner}>
          <Image
            source={require('@/assets/images/fonts_tri/LogoTriGo.jpg')}
            style={styles.bannerImage}
            contentFit="cover"
          />
          <View style={styles.overlay} />
          <View style={styles.headerInfo}>
            <View style={styles.titleRow}>
              <ThemedText type="title" style={styles.bannerTitle}>Ruta histórica mundialista</ThemedText>
            </View>
          </View>
        </View>

        {/* Sección de la línea del tiempo */}
        <View style={styles.timelineSection}>
          <Text style={styles.sectionTitle}>La selección a través de la historia</Text>
          <Text style={styles.sectionSubtitle}>
            Presiona sobre un año para ver la nómina de jugadores, cuerpo técnico y detalles históricos.
          </Text>

          {/* Línea del tiempo vertical */}
          <View style={styles.timelineContainer}>
            {/* Línea vertical de fondo */}
            <View style={styles.verticalLine} />

            {YEARS_DATA.map((item, index) => {
              // Alternar el lado del contenido para hacerlo más dinámico si se desea,
              // o bien mantenerlo en una línea de tiempo elegante hacia la derecha.
              return (
                <View key={item.id} style={styles.timelineItem}>
                  {/* Nodo circular indicador de año */}
                  <View style={styles.timelineNodeContainer}>
                    <SoccerBall />
                  </View>
                  {/* Tarjeta del Año */}
                  <TouchableOpacity
                    style={styles.timelineCard}
                    activeOpacity={0.85}
                    onPress={() => irAlDetalle(item.anio)}
                  >
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardYear}>{item.anio}</Text>
                      <Text style={styles.cardSede}>{item.sede}</Text>
                    </View>
                    <Text style={styles.cardDescription}>{item.descripcion}</Text>
                    <View style={styles.verMasContainer}>
                      <Text style={styles.verMasText}>Ver plantel e info</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>

        {/* Botón de cierre */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.exitButton} onPress={cerrarApp}>
            <Text style={styles.exitButtonText}>Cerrar aplicación</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0f24', // Fondo premium oscuro azul
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerBanner: {
    height: 250,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 15, 36, 0.65)', // Oscurecer la imagen de fondo
  },
  headerInfo: {
    padding: 20,
    zIndex: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bannerTitle: {
    color: '#FFD100', // Dorado Selección
    fontSize: 36,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: '#ffffff',
    fontSize: 18,
    opacity: 0.9,
    marginTop: 4,
  },
  timelineSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    color: '#FFD100',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionSubtitle: {
    color: '#a0aec0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
    lineHeight: 20,
  },
  timelineContainer: {
    position: 'relative',
    paddingLeft: 30,
  },
  verticalLine: {
    position: 'absolute',
    left: 9,
    top: 10,
    bottom: 10,
    width: 4,
    backgroundColor: '#003087', // Línea azul oficial
    borderRadius: 2,
  },
  timelineItem: {
    marginBottom: 35,
    position: 'relative',
  },
  timelineNodeContainer: {
    position: 'absolute',
    left: -35,
    top: 7,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  timelineNodeOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EF3340', // Borde rojo
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF3340',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  timelineNodeInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFD100', // Centro amarillo
  },
  timelineCard: {
    backgroundColor: '#161f3d', // Tarjetas azul marino premium
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 209, 0, 0.15)', // Borde sutil dorado
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardYear: {
    color: '#FFD100',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardSede: {
    color: '#a0aec0',
    fontSize: 14,
    fontWeight: '600',
  },
  cardDescription: {
    color: '#e2e8f0',
    fontSize: 14,
    lineHeight: 20,
  },
  verMasContainer: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  verMasText: {
    color: '#EF3340', // Texto rojo llamativo
    fontWeight: 'bold',
    fontSize: 13,
  },
  footer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  exitButton: {
    backgroundColor: '#EF3340',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#EF3340',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  exitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
