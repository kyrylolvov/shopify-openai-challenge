import React from 'react';
import {
  Modal, Box, Typography, IconButton, FormControl, InputLabel, MenuItem, Select, OutlinedInput, Button,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import engines from '../../utils/engines';
import { PromptResponse } from '../../utils/types';

import * as css from './css';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  setResponses: React.Dispatch<React.SetStateAction<PromptResponse[]>>
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  open, onClose, setResponses,
}) => (
  <Modal open={open} onClose={onClose}>
    <Box css={css.ModalContainer}>
      <Box css={css.CloseButtonContainer}>
        <IconButton onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </IconButton>
      </Box>
      <Typography css={css.ModalTitle} variant="h2">AI Configuration</Typography>
      <Box css={css.ModalBody}>
        <FormControl css={css.EngineSelectContol} fullWidth>
          <InputLabel sx={{ color: 'var(--typograghy-main)' }} id="engine-label">Select engine</InputLabel>
          <Select
            labelId="engine-label"
            label="Select engine"
            css={css.EngineSelect}
          >
            {engines.map((engine) => (
              <MenuItem css={css.EngineMenuItem} value={engine.name}>
                <Typography variant="h2" css={css.EngineMenuItemTitle}>{engine.name}</Typography>
                <Typography css={css.EngineMenuItemSubTitle}>{engine.text}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box css={css.InputRow}>
          <FormControl css={css.EngineSelectContol}>
            <InputLabel id="name-label">
              Temperature
            </InputLabel>
            <OutlinedInput
              css={css.Input}
              autoComplete="off"
              label="Temperature"
            />
          </FormControl>
          <FormControl css={css.EngineSelectContol}>
            <InputLabel id="name-label">
              Maximum length
            </InputLabel>
            <OutlinedInput
              css={css.Input}
              autoComplete="off"
              label="Maximum length"
            />
          </FormControl>
        </Box>

        <Box css={css.InputRow}>
          <FormControl css={css.EngineSelectContol}>
            <InputLabel id="name-label">
              Frequency penalty
            </InputLabel>
            <OutlinedInput
              css={css.Input}
              autoComplete="off"
              label="Frequency penalty"
            />
          </FormControl>
          <FormControl css={css.EngineSelectContol}>
            <InputLabel id="name-label">
              Presence penalty
            </InputLabel>
            <OutlinedInput
              css={css.Input}
              autoComplete="off"
              label="Presence penalty"
            />
          </FormControl>
        </Box>

        <Box css={css.ButtonsContainer}>
          <Button onClick={() => setResponses([])} css={css.ClearButton}>Clear results</Button>
          <Button css={css.SaveChangesButton}>Save changes</Button>
        </Box>
      </Box>
    </Box>
  </Modal>
);

export default SettingsModal;