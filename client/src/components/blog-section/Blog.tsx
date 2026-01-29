type Props = {
  title?: string;
  content?: string;
  slug?: string;
  author?: Record<string, never>;
  status?: string;
};

type keyProps = {
  key: string;
};

const blog = (data: Props & keyProps) => {
  return (
    <div className="rounded-xl border-2 p-3 border-blue-500 ">
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <span>{data.slug}</span>
      <span>{JSON.stringify(data.author)}</span>
    </div>
  );
};

export default blog;
