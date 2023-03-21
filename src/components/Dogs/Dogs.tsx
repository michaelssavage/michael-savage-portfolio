import {
  Badge,
  Collapse,
  Group,
  Image,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { getDogPic } from "api/dogs";

interface DogProps {
  url: string;
  width: string;
  height: string;
}

export const Dogs = () => {
  const [opened, setOpened] = useState(false);
  const [img, setImg] = useState<DogProps>();

  const populateDogPic = useCallback(async () => {
    if (!opened) {
      const data: DogProps = await getDogPic();
      setImg(data);
    }
  }, [opened]);

  useEffect(() => {
    populateDogPic();
  }, [opened, populateDogPic]);

  return (
    <Paper
      shadow="sm"
      p="sm"
      withBorder
      className={opened ? "openCard" : "card"}
      onClick={() => setOpened(!opened)}
    >
      <Group position="apart">
        <Title order={3}>Dog API</Title>
        <Badge color="pink" variant="light">
          REST
        </Badge>
      </Group>
      <Text>Here, have a free picture of a dog</Text>
      <Collapse in={opened} mt="xs">
        <div style={{ marginLeft: "auto", marginRight: "auto", width: "75%" }}>
          {img && (
            <Image
              src={img.url}
              width="100%"
              alt="Dog API"
              placeholder={
                <Text align="center">
                  There's supposed to be a cute dog here
                </Text>
              }
            />
          )}
        </div>
      </Collapse>
    </Paper>
  );
};
