import {HomeIconButton} from "./HomeIcon";
import {ChatIconButton} from "./ChatIcon";
import {AddIconButton} from "./AddIcon";
import {ExploreIconButton} from "./ExploreIcon";
import {NotificationIconButton} from "./NotificationIcon";
import {MoreIconButton} from "./MoreIcon";
import {AvatarIconButton} from "./AvatarIcon";


export const ButtonControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'home':
            return  <HomeIconButton {...rest} />
        case 'chat':
            return <ChatIconButton {...rest} />
        case 'add':
            return <AddIconButton {...rest} />
        case 'explore':
            return <ExploreIconButton {...rest} />
        case 'notification':
            return <NotificationIconButton {...rest} />
        case 'avatar':
            return <AvatarIconButton {...rest} />
        case 'more':
            return <MoreIconButton {...rest} />
        default:
            return null
    }
}
