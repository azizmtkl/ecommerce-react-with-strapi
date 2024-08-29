import { Container, useTheme } from "@mui/material";
import { featuresList } from "../constants/features";
import FeatureItem from "./FeatureItem";

const Feautures = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        bgcolor: theme.palette.bgFeatures.main,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {featuresList.map((item) => (
        <FeatureItem
          key={item.title}
          title={item.title}
          subTitle={item.subTitle}
          icon={item.icon}
        />
      ))}
    </Container>
  );
};

export default Feautures;
