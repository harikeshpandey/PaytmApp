export default function Success() {
  return (
    <div>
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
          <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-1.5 py-6">
              <h2 className="text-3xl font-bold text-center">
                Successfully Transferred
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
