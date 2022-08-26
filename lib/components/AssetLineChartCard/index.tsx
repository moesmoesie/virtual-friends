import StoryblokImage from "../StoryblokImage";

const AssetLineChartCard: React.FC = () => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
  ];

  return (
    <div className="bg-dark-purple-600 rounded-lg pt-6 pb-4 shadow-2xl">
      <StoryblokImage
        alt="chart"
        filename={
          "https://a.storyblok.com/f/170199/932x271/7af8cd14ea/graph.png"
        }
        is_external_url={false}
        size={600}
      />
      <div className="flex justify-between pl-5 pr-7">
        {months.map((el, index) => {
          return <span key={index}>{el}</span>;
        })}
      </div>
    </div>
  );
};

export default AssetLineChartCard;
