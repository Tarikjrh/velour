import {
  Document,
  Page,
  Image,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Svg,
  Path,
} from "@react-pdf/renderer";
import Logo from "./components/Logo";

const styles = StyleSheet.create({
  coverPage: {
    backgroundColor: "#1F261E",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coverText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  page: { padding: 20 },
  image: { width: 200, height: 200, marginBottom: 10 },
  text: { fontSize: 12 },
});

const MyPDFDocument = ({ images }) => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <View>
        <Text style={styles.coverText}>My PDF Cover Page</Text>
        <Logo />
      </View>
    </Page>

    {/* <Page size="A4" style={styles.page}>
      {images.map((imgSrc, index) => (
        <View key={index}>
          <Image src={imgSrc} style={styles.image} />
          <Text>Image {index + 1}</Text>
        </View>
      ))}
    </Page> */}
  </Document>
);

export default MyPDFDocument;
