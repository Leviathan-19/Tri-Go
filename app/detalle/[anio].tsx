import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { YEARS_DATA } from '../(tabs)/index';

export default function DetalleAnioScreen() {
  const { anio } = useLocalSearchParams<{ anio: string }>();
  const router = useRouter();

  // Buscar los datos históricos correspondientes al año
  const datos = YEARS_DATA.find((item) => item.anio === anio);

  const volver = () => {
    router.back();
  };

  if (!datos) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>No se encontró información para el año {anio}</Text>
        <TouchableOpacity style={styles.backButton} onPress={volver}>
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header Personalizado */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBackButton} onPress={volver}>
          {/* Imagen del plantel */}
          <Text style={styles.headerBackButtonText}>Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mundial {datos.anio}</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Imagen del plantel */}
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/players/seleccion_2026.jpeg')}
            style={styles.playerImage}
            contentFit="cover"
          />
          <View style={styles.imageOverlay} />
          <View style={styles.imageLabelContainer}>
            <Text style={styles.imageLabel}>{datos.sede}</Text>
          </View>
        </View>

        {/* Director Técnico */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionLabel}>DIRECTOR TÉCNICO</Text>
          <View style={styles.tecnicoRow}>
            <View style={styles.tecnicoAvatar}>
              <Text style={styles.tecnicoInitials}>DT</Text>
            </View>
            <Text style={styles.tecnicoName}>{datos.tecnico}</Text>
          </View>
        </View>

        {/* Reseña Histórica */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionLabel}>RESEÑA HISTÓRICA</Text>
          <Text style={styles.resenaText}>{datos.resena}</Text>
        </View>

        {/* Listado de Jugadores destacados */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionLabel}>JUGADORES DESTACADOS</Text>
          <View style={styles.playersContainer}>
            {datos.jugadores.map((jugador, index) => (
              <View key={index} style={styles.playerRow}>
                <View style={styles.playerNumberContainer}>
                  <Text style={styles.playerNumber}>{index + 1}</Text>
                </View>
                <Text style={styles.playerName}>{jugador}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Botón inferior para volver */}
        <TouchableOpacity style={styles.bottomBackButton} onPress={volver}>
          <Text style={styles.bottomBackButtonText}>Volver a la línea de tiempo</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0f24', // Fondo azul oscuro premium
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#0a0f24',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#EF3340',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 209, 0, 0.15)',
    backgroundColor: '#161f3d',
  },
  headerBackButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  headerBackButtonText: {
    color: '#FFD100', // Dorado
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerPlaceholder: {
    width: 60, // Para balancear el back button a la izquierda
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  imageContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 209, 0, 0.2)',
  },
  playerImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 15, 36, 0.35)',
  },
  imageLabelContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(22, 31, 61, 0.85)',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  imageLabel: {
    color: '#FFD100',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: '#161f3d',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 209, 0, 0.1)',
  },
  sectionLabel: {
    color: '#EF3340', // Rojo oficial para los títulos de sección
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  tecnicoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tecnicoAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#003087',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tecnicoInitials: {
    color: '#FFD100',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tecnicoName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resenaText: {
    color: '#e2e8f0',
    fontSize: 14,
    lineHeight: 22,
  },
  playersContainer: {
    gap: 10,
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  playerNumberContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFD100',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  playerNumber: {
    color: '#0a0f24',
    fontWeight: 'bold',
    fontSize: 12,
  },
  playerName: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomBackButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#003087',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  bottomBackButtonText: {
    color: '#FFD100',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
