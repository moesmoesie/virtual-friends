import { Page } from ".";
import { usePreview } from "../../sanity/sanity.preview";
import filterDataToSingleItem from "../../sanity/helpers/filterDataToSingleItem";

const PreviewPage: React.FC<{ query: string; params: any }> = (props) => {
  const data = usePreview(null, props.query, props.params);
  const page: any = filterDataToSingleItem(data, true);

  return <Page {...page} />;
};

export default PreviewPage;
