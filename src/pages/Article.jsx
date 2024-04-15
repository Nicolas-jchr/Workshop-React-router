import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getSomeData = (id) => {
  const allData = {
    42: {
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet",
    },
    123: {
      title: "Schnapsum",
      content: "Lorem Elsass ipsum Salut bisamme",
    },
    666: {
      title: "Cupcake Ipsum",
      content: "Tiramisu pastry wafer brownie soufflé",
    },
  };

  return allData[id];
};

function Article() {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const someData = getSomeData(id);

    setData(someData);
  }, [id]);

  return (
    data != null && (
      <article>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </article>
    )
  );
}

export default Article;

// AURAIS PU FONCTIONNER :

// const allValuesForTheDynamicSegments = useParams();
// const id = allValuesForTheDynamicSegments.id;

// OU const { id } = useParams(); => destructuration