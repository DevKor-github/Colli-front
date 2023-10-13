import { useState } from 'react'
import { Button, Dialog, Fieldset, Input, Label, Paragraph, Text, TooltipSimple, Unspaced, XStack } from 'tamagui'

export const DialogDemo = () => {
  return <DialogInstance />
}

const DialogInstance = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      modal
      onOpenChange={open => {
        setOpen(open)
      }}
    >
      <Dialog.Trigger asChild>
        <Button>
          <Text>Show Dialog</Text>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true
              }
            }
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4"
        >
          <Dialog.Title>
            <Text>Edit profile</Text>
          </Dialog.Title>
          <Dialog.Description>
            <Text>Make changes to your profile here. Click save when you're done.</Text>
          </Dialog.Description>
          <Fieldset gap="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="name">
              <Text>Name</Text>
            </Label>
            <Input flex={1} id="name" defaultValue="Nate Wienert" />
          </Fieldset>
          <Fieldset gap="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="username">
              <TooltipSimple label="Pick your favorite" placement="bottom-start">
                <Paragraph>
                  <Text>Food</Text>
                </Paragraph>
              </TooltipSimple>
            </Label>
          </Fieldset>

          <XStack alignSelf="flex-end" gap="$4">
            <DialogInstance />
            <Dialog.Close displayWhenAdapted asChild>
              <Button theme="alt1" aria-label="Close">
                <Text>Save changes</Text>
              </Button>
            </Dialog.Close>
          </XStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button position="absolute" top="$3" right="$3" size="$2" circular />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
