import React from 'react'
import { TextArea } from 'carbon-components-react'
import TrainingLayout from './TrainingLayout'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/12"
      nextPage="/onboarding/14"
      title="Being a Voting Ambassador"
    >
      <p>
        Do you have any questions about being a Voting Ambassador and talking
        about voting with people you know?
      </p>
      <br />
      <TextArea
        name="questions"
        invalidText="A valid value is required"
        placeholder=""
        rows={4}
        required
      />
    </TrainingLayout>
  );
}