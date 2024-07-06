import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  console.log(data);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        {name}
        <span className="blue_gradient"> Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.length ? (
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))
        ) : (
          <div className="prompt_card flex text-center align-middle">
            <h1 className="font-satoshi font-semibold">
              you doesnt create your story yet
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
