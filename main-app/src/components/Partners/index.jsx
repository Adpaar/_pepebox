import React from "react";
import Badge from "./PartnersBadge";
import Card from "./PartnersCard";
import partners from "./partners.json";

export default function Partners() {
  return (
    <Container>
      {partners.map((partner, index) => (
        <Card
          key={partner.description}
          hexa={partner.hexa}
          title={partner.title}
          description={website.description}
          image={partner.image}
        />
      ))}
    </Container>
  );
}
