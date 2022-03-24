//
//  ReactNativeNavigationWindow.h
//
//  Created by Jim Speth on 3/23/22.
//

#import <UIKit/UIKit.h>

@interface ReactNativeNavigationWindow : UIWindow

+ (instancetype)shared;

- (void)presentAnimated:(BOOL)animated;
- (void)dismissAnimated:(BOOL)animated;

@end
