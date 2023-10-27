import React from 'react';
import { Button, Modal, Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import CustomButton from './CustomButton';

interface CodeModalProps {
  handleClose: () => void;
  htmlCode: string;
}

const CodeModal: React.FC<CodeModalProps> = ({ handleClose, htmlCode }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      alert('Text copied to clipboard!');
    } catch (error) {
      console.error('Copy to clipboard failed:', error);
    }
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      sx={{
        width: '80%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: '#fff',
        display: 'flex',
      }}
    >
      <Stack flex={1} bgcolor={'#fff'} minHeight={'250px'}>
        <Stack direction={'row'} justifyContent={'flex-end'} p={2}>
          <Button endIcon={<Close />} onClick={handleClose}></Button>
        </Stack>
        <Stack>
          <Typography variant="body1" textAlign={'center'}>
            That’s it! All done!
          </Typography>
          <Typography variant="body2" textAlign={'center'}>
            Simply copy the code below, and paste it into your website!
          </Typography>
        </Stack>
        <Stack p={2}>
          <textarea value={htmlCode} style={{ height: '120px' }} />
        </Stack>
        <Stack direction={'row'} justifyContent={'flex-end'} p={2}>
          <CustomButton
            text="Copy to clipboard"
            onClick={() => handleCopyToClipboard()}
          />
        </Stack>
      </Stack>
    </Modal>
  );
};

export default CodeModal;
