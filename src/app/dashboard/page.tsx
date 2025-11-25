import { auth, currentUser } from "@clerk/nextjs/server";

const DashboardPage = async () => {
  const { sessionId, userId } = await auth();
  const user = await currentUser();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
        
        <img
          src={user?.imageUrl ?? ""}
          alt="Profile Image"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-md"
        />

        <h1 className="text-2xl text-green-500 font-bold mt-4">
          Welcome, <span className="text-blue-600">{user?.fullName}</span> 👋
        </h1>

        <p className="text-gray-600 mt-2">
          We're happy to see you on your dashboard.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
