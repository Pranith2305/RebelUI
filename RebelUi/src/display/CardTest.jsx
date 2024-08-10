import React from 'react';
import Card from '../components/Cards'; // Ensure this path is correct based on your project structure

const CardTest = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {/* Default Card with Hover Effect */}
      <Card
        title="Default Card"
        description="This is a default card with a hover effect. Hover over it to see the effect."
        image="https://via.placeholder.com/400"
      />

      {/* Primary Card with Hover Effect */}
      <Card
        title="Primary Card"
        description="This card has a blue background and a hover effect."
        image="https://via.placeholder.com/400"
        type="primary"
        hoverEffect={true}
      />

      {/* Success Card Without Hover Effect */}
      <Card
        title="Success Card"
        description="This card has a green background but does not scale or shadow on hover."
        image="https://via.placeholder.com/400"
        type="success"
        hoverEffect={false}
      />

      {/* Danger Card with Extra Large Shadow */}
      <Card
        title="Danger Card"
        description="This card has a red background and an extra-large shadow."
        image="https://via.placeholder.com/400"
        type="danger"
        shadow="2xl"
      />

      {/* Custom Card with All Styles */}
      <Card
        title="Custom Card"
        description="This card has a custom style with a large shadow and hover effect."
        image="https://via.placeholder.com/400"
        type="secondary"
        shadow="xl"
        hoverEffect={true}
      />
    </div>
  );
};

export default CardTest;