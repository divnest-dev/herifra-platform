export default function Settings({ params }: { params: { username: string } }) {
  return (
    <>
      <h2>Settings</h2>
      <a href={`/profile/private/${params.username}/settings/edit`}>
        Edit Profile
      </a>
    </>
  );
}
