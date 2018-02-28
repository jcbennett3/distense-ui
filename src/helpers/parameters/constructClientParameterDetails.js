import { BigNumber } from 'bignumber.js'
import * as params from '../../constants/parameters/parameterDetails'

export const constructClientParameterDetails = (p, pctDID) => {
  let title

  let value

  const updateFactor = new BigNumber(1 + pctDID)
  const min = new BigNumber(p.value).div(updateFactor)
  const max = new BigNumber(p.value).times(updateFactor)

  const placeholder = `MIN: ${min} MAX: ${max}`

  if (p.title === params.votingIntervalParameter.title) {
    value = p.value / 86400 + ' days'
    title = 'How Often Parameters Can Be Voted On'
  }

  if (p.title === params.proposalPctDIDToApproveParameter.title) {
    value = p.value + '%'
    title = 'Percent of DID that must vote on task rewards'
  }

  if (p.title === params.pctDIDRequiredToMergePullRequestParameter.title) {
    value = p.value + '%'
    title = 'Percent of DID that must vote to approve pull requests'
  }

  if (p.title === params.maxRewardParameter.title) {
    value = p.value + ' DID'
    title = 'Maximum Reward in DID'
  }

  if (
    p.title === params.numDIDRequiredToApproveVotePullRequestParameter.title
  ) {
    value = p.value + ' DID'
    title =
      'Number of DID that must be owned in order to vote to approve pull requests'
  }

  if (p.title === params.numDIDRequiredToTaskRewardVoteParameter.title) {
    value = p.value + ' DID'
    title = 'Number of DID required to vote on task rewards'
  }

  if (p.title === params.numDIDRequiredToAddTaskParameter.title) {
    value = p.value + ' DID'
    title = 'Number of DID required to propose tasks'
  }

  if (p.title === params.minNumberOfTaskRewardVotersParameter.title) {
    value = p.value + ' voters'
    title = 'Number of voters required  to determine reward'
  }

  if (p.title === params.defaultRewardParameter.title) {
    value = p.value + ' DID'
    title = 'Default number of DID issuable for each task'
  }

  if (p.title === params.didPerEtherParameter.title) {
    value = p.value + ' DID'
    title = 'Conversion ratio of DID per ether'
  }

  return {
    value,
    title,
    placeholder
  }
}
