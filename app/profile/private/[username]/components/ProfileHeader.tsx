import { Grid, Heading, Button, Text } from "@radix-ui/themes";
import { GearIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export default function ProfileHeader({ username }: { username: string }) {
  return (
    <header>
      <Heading>{username}</Heading>
      <nav>
        <Grid columns="3" gap="2" rows="repeat(2, 64px)" width="auto">
          <Button variant="soft">
            <PlusCircledIcon />
            <Text>Legg inn kundeforhold</Text>
          </Button>
          <Button variant="soft">
            <GearIcon />
            <a href={`/profile/private/${username}/settings`}>Innstillinger</a>
          </Button>
        </Grid>
      </nav>
    </header>
  );
}
