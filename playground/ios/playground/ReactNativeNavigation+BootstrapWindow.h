//
//  ReactNativeNavigation+BootstrapWindow.h
//
//  Created by Jim Speth on 3/23/22.
//

#import <ReactNativeNavigation/ReactNativeNavigation.h>
#import <React/RCTBridge.h>

@interface ReactNativeNavigation (BootstrapWindow)
+ (void)bootstrapWithBridge:(RCTBridge *)bridge window:(UIWindow *)window;
@end
