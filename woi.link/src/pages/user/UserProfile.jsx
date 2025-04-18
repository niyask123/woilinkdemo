import useUserStore from "../../store/useUserStore";


const UserProfile = () => {
  const { profile, updateProfile } = useUserStore();

  const handleUpdate = () => {
    updateProfile({ name: "Jane Doe", email: "jane.doe@example.com", age: 30 });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">User Profile</h2>
      <p className="mt-2 text-gray-600">Name: {profile.name}</p>
      <p className="mt-2 text-gray-600">Email: {profile.email}</p>
      <p className="mt-2 text-gray-600">Age: {profile.age}</p>

      <button
        onClick={handleUpdate}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Update Profile
      </button>
    </div>
  );
};

export default UserProfile;
