import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/epistemicStatus.scss"

export default (() => {
  function EpistemicStatus({ fileData }: QuartzComponentProps) {
    const status = fileData.frontmatter?.epistemic_status
    if (!status) return null

    return (
      <div class="epistemic-status">
        <span class="epistemic-label">Epistemic Status: </span>
        <span class="epistemic-value">{status as string}</span>
      </div>
    )
  }

  EpistemicStatus.css = style
  return EpistemicStatus
}) satisfies QuartzComponentConstructor
