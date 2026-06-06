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

// Datos históricos de la selección
export const YEARS_DATA = [
  {
    id: '2026',
    anio: '2026',
    sede: 'USA, México y Canadá',
    descripcion: '¡La Tri se clasifica por cuarta ocasión en su historia al Mundial!',
    tecnico: 'Félix Sánchez Bas',
    jugadores: ['Hernán Galíndez', 'Felix Torres', 'Willian Pacho', 'Moisés Caicedo', 'Kendry Páez', 'Enner Valencia', 'George Michael Mejía', 'Jordy Alcívar', 'John Yeboah', 'Gonzalo Plata', 'José Cifuentes'],
    resena: 'Ecuador se clasificó a su cuarto Mundial tras una fase eliminatoria llena de esfuerzo y garra. El equipo demostró un gran nivel competitivo bajo la dirección técnica de Félix Sánchez Bas, logrando un cupo directo a la cita mundialista.',
    imagen: 'seleccion_2026.jpeg' // Se usará por defecto seleccion_2026.jpeg si no hay otra
  },
  {
    id: '2022',
    anio: '2022',
    sede: 'Qatar',
    descripcion: 'Gran victoria frente al anfitrión en el partido inaugural con doblete de Enner Valencia.',
    tecnico: 'Gustavo Alfaro',
    jugadores: ['Enner Valencia', 'Moises Caicedo', 'Piero Hincapié', 'Pervis Estupiñán', 'Gonzalo Plata'],
    resena: 'Ecuador disputó el Grupo A junto a Qatar, Senegal y Países Bajos. Se consiguieron 4 puntos memorables, demostrando el gran nivel de la nueva generación dorada.',
    imagen: 'seleccion_2026.jpeg' // Se usará por defecto seleccion_2026.jpeg si no hay otra
  },
  {
    id: '2014',
    anio: '2014',
    sede: 'Brasil',
    descripcion: 'Tercer mundial de la Tri, logrando una victoria de 2-1 ante Honduras.',
    tecnico: 'Reinaldo Rueda',
    jugadores: ['Antonio Valencia', 'Felipe Caicedo', 'Jefferson Montero', 'Alexander Domínguez', 'Christian Noboa'],
    resena: 'Ecuador batalló en el Grupo E con Francia, Suiza y Honduras. Obtuvo 4 puntos pero no alcanzó para clasificar a octavos.',
    imagen: 'seleccion_2026.jpeg'
  },
  {
    id: '2006',
    anio: '2006',
    sede: 'Alemania',
    descripcion: '¡La mejor participación histórica! Clasificamos por primera vez a Octavos de Final.',
    tecnico: 'Luis Fernando Suárez',
    jugadores: ['Agustín Delgado', 'Carlos Tenorio', 'Iván Hurtado', 'Edwin Tenorio', 'Cristian Lara'],
    resena: 'Derrotamos a Polonia (2-0) y Costa Rica (3-0) en fase de grupos. Fuimos eliminados por Inglaterra con un tiro libre de David Beckham.',
    imagen: 'seleccion_2026.jpeg'
  },
  {
    id: '2002',
    anio: '2002',
    sede: 'Corea/Japón',
    descripcion: 'Nuestra primera e histórica clasificación mundialista con el gol inolvidable de Kaviedes.',
    tecnico: 'Hernán Darío Gómez',
    jugadores: ['Álex Aguinaga', 'Iván Kaviedes', 'Agustín Delgado', 'José Francisco Cevallos', 'Ulises de la Cruz'],
    resena: 'El histórico empate contra Uruguay en Quito nos dio el boleto directo. En el mundial logramos nuestra primera victoria al derrotar 1-0 a Croacia.',
    imagen: 'seleccion_2026.jpeg'
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
              <ThemedText type="title" style={styles.bannerTitle}>La Tri</ThemedText>
              <SoccerBall />
            </View>
            <ThemedText style={styles.bannerSubtitle}>Ruta histórica mundialista</ThemedText>
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
