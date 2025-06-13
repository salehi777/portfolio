import {
  type RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router'

export function render(_url: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <StaticRouter location={_url}>
      <App />
    </StaticRouter>,
    options
  )
}
