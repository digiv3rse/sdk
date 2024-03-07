/**
 * The secondary `/inbox` entrypoint provides a set of hooks to help integrate XMTP SDK features with the DiGi SDK.
 * The hooks are intended to be used together with hooks provided by `@xmtp/react-sdk` package.
 * You can find more in their [GitHub repository](https://github.com/xmtp/xmtp-web/tree/main/packages/react-sdk)
 *
 * ### Usage
 *
 * Wrap your app with DiGiProvider, together with the XMTPProvider, as described in their docs.
 *
 * ```tsx
 * import { XMTPProvider } from "@xmtp/react-sdk";
 *
 * function App() {
 *   return (
 *     <WagmiConfig config={config}>
 *       <DiGiProvider config={digiConfig}>
 *         <XMTPProvider>
 *           <YourRoutes />
 *         </XMTPProvider>
 *       </DiGiProvider>
 *     </WagmiConfig>
 *   );
 * }
 * ```
 *
 * Now you can use all the hooks from `@xmtp/react-sdk` package as well as from this folder.
 *
 * You import them like this:
 * ```tsx
 * import { useConversations } from '@xmtp/react-sdk';
 * import { useXmtpClient, useEnhanceConversations } from '@digiv3rse/react-web/inbox';
 * ```
 * @module Inbox
 */
export * from "./types.js";
export * from "./useEnhanceConversation.js";
export * from "./useEnhanceConversations.js";
export * from "./useStartDiGiConversation.js";
export * from "./useXmtpClient.js";
