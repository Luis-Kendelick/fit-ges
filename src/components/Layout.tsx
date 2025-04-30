import React from 'react';
import { AppSidebar } from './app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { Separator } from './ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile()
  return (
    <>
      <SidebarProvider>
        <AppSidebar variant='inset' />
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 md:px-3">
              {!isMobile && <SidebarTrigger iconSize='sm' />}
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <Separator
            orientation="horizontal"
            className="data-[orientation=horizontal]:h-[0.5"
          />
          <div className="flex flex-col flex-grow gap-2 rounded-md">
            <main className="flex-grow">{children}</main>

            {/* <div className="fixed bottom-4 right-4 lg:hidden bg-white/35 backdrop-blur-md border-0 rounded-md w-20 h-20"> */}
            {isMobile && <SidebarTrigger className='text-white w-12 h-12 absolute bottom-12 right-12 rounded-full bg-black/45 backdrop-blur-md border-0' />}
            {/* </div> */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Layout;