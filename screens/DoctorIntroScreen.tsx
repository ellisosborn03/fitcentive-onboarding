import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const { width, height } = Dimensions.get("window")

// Color tokens (from your design system)
const COLORS = {
  bg: ["#000000", "#0D0D0D", "#1A1A1A"],
  textPrimary: "#FFFFFF",
  buttonBg: "#00FFBB", // brand CTA background
}

type Props = {
  title?: string
  subtitle?: string
  imageUri?: string
  onGetStarted?: () => void
}

export default function DoctorIntroScreen({
  title = "Trusted by a world-class physician",
  subtitle = "Dr Osborn is a pioneer in longevity medicine with decades of experience",
  imageUri = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2038389-Ubyok32BgSkKLHU7mZLimDIJFG5gP3.png",
  onGetStarted,
}: Props) {
  const bottomSafe = Platform.OS === "ios" ? 24 : 16
  const ctaHeight = 60

  // Responsive image sizing for iPhones
  const imageMaxWidth = Math.min(width * 0.92, 520)
  const imageHeight = Math.min(height * 0.68, 760)

  return (
    <LinearGradient
      colors={COLORS.bg}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.screen}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safe}>
        {/* Foreground doctor image */}
        <Image
          source={{ uri: imageUri }}
          resizeMode="contain"
          accessibilityLabel="Doctor"
          style={[
            styles.doctor,
            {
              width: imageMaxWidth,
              height: imageHeight,
              // Reserve space at the bottom for text + CTA so they don't overlap
              bottom: ctaHeight + 200,
            },
          ]}
        />

        {/* Bottom overlay for text readability and smooth blend */}
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.55)", "rgba(0,0,0,0.95)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.bottomOverlay}
          pointerEvents="none"
        />

        {/* Centered text + CTA block */}
        <View style={[styles.content, { paddingBottom: bottomSafe + 8 }]}>
          <View style={styles.textWrap}>
            <Text style={styles.title} accessibilityRole="header">
              {title}
            </Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>

          <Pressable
            onPress={onGetStarted}
            accessibilityRole="button"
            accessibilityLabel="Get started"
            style={({ pressed }) => [
              styles.cta,
              { opacity: pressed ? 0.9 : 1 },
            ]}
          >
            <Text style={styles.ctaText}>GET STARTED</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  safe: {
    flex: 1,
  },
  doctor: {
    position: "absolute",
    alignSelf: "center",
  },
  bottomOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: Math.max(240, height * 0.26),
  },
  content: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 16,
    alignItems: "center",
  },
  textWrap: {
    maxWidth: 520,
    width: "100%",
    paddingHorizontal: 8,
    alignItems: "center",
  },
  title: {
    color: COLORS.textPrimary, // white only
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    fontFamily: Platform.select({
      ios: "RiftSoft-Demi",
      android: "RiftSoft-Demi",
      default: "System",
    }),
    fontWeight: Platform.OS === "ios" ? "600" : "700",
    marginBottom: 10,
  },
  subtitle: {
    color: COLORS.textPrimary, // white only
    opacity: 0.92,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    fontFamily: Platform.select({
      ios: "HelveticaNeue-Medium",
      android: "HelveticaNeueMedium",
      default: "System",
    }),
  },
  cta: {
    marginTop: 24,
    height: 60,
    minWidth: Math.min(width * 0.86, 420),
    borderRadius: 32,
    backgroundColor: COLORS.buttonBg,
    alignItems: "center",
    justifyContent: "center",
    // Soft glow on iOS; harmless on Android
    shadowColor: "#00FFC0",
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  ctaText: {
    color: COLORS.textPrimary, // white only
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.25,
  },
})
