const Home: React.FC = () => {
  return (
    <>
      <h1>Let&rsquo;s push the web forward.</h1>
      <p>We&rsquo;re a future-focused web development practice, helping incredible design agencies build incredible websites.</p>
      <p>We&rsquo;re a future-focused web development practice, helping incredible design agencies build incredible websites.</p>
      {Array.from({ length: 100 }).map((el, index) => {
        return <p key={index}>{index}</p>;
      })}
    </>
  );
};

export default Home;
