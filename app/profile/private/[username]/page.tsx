import ProfileHeader from "./components/ProfileHeader";

export default function PrivateProfile({
  params,
}: {
  params: { username: string };
}) {
  return (
    <>
      <ProfileHeader username={params.username} />
    </>
  );
}
