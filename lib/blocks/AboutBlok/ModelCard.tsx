import React from "react";
import Card from "../../components/Card";

const ModelCard: React.FC = () => {
  return (
    <Card className="overflow-hidden h-full w-full">
      <img src="/art.png" className="w-full h-full object-cover" />
    </Card>
  );
};

export default ModelCard;
