import { useLocalState } from '../backend';
import { Button } from './Button';
import { Section } from './Section';

export const CollapsibleSection = (props, context) => {
  const {
    children,
    startOpen = true,
    sectionKey,
    color,
    buttons = [],
    forceOpen = false,
    showButton = !forceOpen,
    ...rest
  } = props;
  const [isOpen, setOpen] = useLocalState(
    context,
    `open_collapsible_${sectionKey}`,
    startOpen,
  );
  return (
    <Section
      fitted={!forceOpen && !isOpen}
      buttons={
        showButton && (
          <>
            {buttons}
            {
              <Button
                fluid
                color={forceOpen || isOpen ? 'transparent' : color}
                icon={forceOpen || isOpen ? 'chevron-down' : 'chevron-left'}
                onClick={() => setOpen(!isOpen)}
              />
            }
          </>
        )
      }
      {...rest}
    >
      {forceOpen || isOpen ? children : null}
    </Section>
  );
};
