function u(e){window.enmity.plugins.registerPlugin(e)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const m=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function r(...e){return window.enmity.modules.getByProps(...e)}function y(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;function g(e){return window.enmity.patcher.create(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl,o.ScrollView,o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio,o.FormRow,o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;var S="ReadEverything",p="1.0.0",v="Mark all messages and servers as read with one button.",F=[{name:"byeoon",id:"1167275288036655133"}],T="#00007d",b="https://github.com/byeoon/ReadEverything",C={name:S,version:p,description:v,authors:F,color:T,sourceUrl:b};const{default:t}=r("ButtonColors","ButtonSizes"),L=r("openLazy","hideActionSheet"),f=y("unreadMentionsIndicatorTop"),n=g("ReadEverything"),B={...C,onStart(){console.log("[ReadEverything] Hello world!");const e=n.before(L,"openLazy",(R,[s,A])=>{e(),s.then(l=>{const c=n.after(l,"default",(x,k,w)=>{c();const a=n.after(w,"type",(z,E,i)=>{var d;m.useEffect(()=>()=>void a(),[]),console.log("did we get it?"+f),(d=i.props).children!=null||(d.children=[]),i.props.children.push(m.createElement(h,null,"Test"),m.createElement(t,{color:t.Colors.BRAND,text:"Read",size:t.Sizes.SMALL,onPress:()=>{}}))})})})})},onStop(){n.unpatchAll()}};u(B);
